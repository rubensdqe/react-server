export default ({ body, title }) => {
  return `
  <!DOCTYPE html>
  <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>${title}</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
      </head>
      <body>
          <div id="root" style="font-family:Open Sans"></div>
          <script src="/dist/bundle.js">${body}</script>
      </body>
  </html>
  `
}
