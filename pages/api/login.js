/* eslint-disable camelcase */
import { withIronSessionApiRoute } from 'iron-session/next';

import httpClient from 'lib/httpClient';
import { sessionOptions } from 'lib/session';

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req, res) {
  const { email, password } = await req.body;
  const url = `${process.env.BACKEND_URL}/api/v1/oauth/token`;

  try {
    const {
      data: {
        data: { attributes },
      },
    } = await httpClient.post(url, {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'password',
      email,
      password,
    });

    const { accessToken, tokenType, expiresIn, refreshToken, createdAt } = attributes;
    const user = { email, isLoggedIn: true, accessToken, tokenType, expiresIn, refreshToken, createdAt };

    req.session.user = user;
    await req.session.save();
    res.json({ email });
  } catch (error) {
    res.status(500).json(error);
  }
}
