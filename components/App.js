export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: 'Source Sans Pro', sans-serif;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
      a {
        color: #22BAD9;
      }
      p {
        font-size: 12px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22BAD9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      * {
        font-family: 'Source Sans Pro', sans-serif;
      }
      body {
        margin: 0;
        padding: 25px 50px;
      }
      a {
        color: #22BAD9;
      }
      p {
        font-size: 12px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      .ur-btn {
         -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: inline-block;
        cursor: default;
        background-color: #ED6863;
        width: auto;
        height: 45px;
        line-height: 38px;
        padding: 5px 20px 0 20px;
        font-size: 25px;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        text-align: center;
        font-weight: bold;
        font-family: "Source Sans Pro",sans-serif;
        // max-width: 610px;
        overflow: hidden;
        -moz-transition: background-color ease-out 100ms 0ms;
        -webkit-transition: background-color ease-out 100ms 0ms;
        -o-transition: background-color ease-out 100ms 0ms;
        transition: background-color ease-out 100ms 0ms;
        color: #8d1510;
        -webkit-box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
        -moz-box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
        box-shadow: 0 3px 12px 0 rgba(0,0,0,0.1);
      }
      .ur-btn:hover {
        -webkit-transition: background-color ease-out 100ms 0ms;
        -o-transition: background-color ease-out 100ms 0ms;
        transition: background-color ease-out 100ms 0ms;
        background-color: #f29491;
        cursor: pointer;
      }
    `}</style>
  </main>
)