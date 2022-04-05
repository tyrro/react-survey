import { withIronSessionApiRoute } from 'iron-session/next';

import httpClient from 'lib/httpClient';
import { sessionOptions } from 'lib/session';

export default withIronSessionApiRoute(profileRoute, sessionOptions);

async function profileRoute(req, res) {
  const { tokenType, accessToken } = await req.session.user;
  const bearerToken = `${tokenType} ${accessToken}`;
  const url = `${process.env.BACKEND_URL}/api/v1/me`;

  try {
    const {
      data: {
        data: { attributes },
      },
    } = await httpClient.get(url, {
      headers: {
        Authorization: bearerToken,
      },
    });

    const { name, avatarUrl } = attributes;

    res.json({ name, avatarUrl });
  } catch (error) {
    res.status(500).json(error);
  }
}
