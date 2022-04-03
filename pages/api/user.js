import { withIronSessionApiRoute } from 'iron-session/next';

import { sessionOptions } from 'lib/session';

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {
  const user = req.session.user;

  if (user) {
    res.json({
      isLoggedIn: true,
      email: user.email,
    });
  } else {
    res.json({
      isLoggedIn: false,
      email: '',
    });
  }
}
