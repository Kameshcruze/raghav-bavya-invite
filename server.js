const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const siteDir = path.join(
  __dirname,
  'raghav_bavya_invite.netlify.app',
  'raghav-bavya-invite.netlify.app'
);
const assetsRootDir = path.join(__dirname, 'raghav_bavya_invite.netlify.app');

app.use(express.static(siteDir));
app.use(express.static(assetsRootDir));

app.use((req, res) => {
  res.sendFile(path.join(siteDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
