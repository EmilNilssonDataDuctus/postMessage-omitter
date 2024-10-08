if (window.opener) {
  // outside react component due to only runnning at script loading
  window.opener.postMessage("message recieved", "*");
  console.log(window.opener);
  console.log(window.opener.location);
}

export const PostMessageTrigger = () => {
  return (
    <>
      <h1>window.postMessage API - receiver</h1>
      <div style={{ display: "flex", gap: "32px" }}>
        <div>
          <h2>Data info</h2>
          <div style={{ textAlign: "left" }}>
            <pre>
              {window.opener ? "Channeldata truthy" : "Channeldata falsy"}
            </pre>
          </div>
        </div>
        <div>
          <h2>Info</h2>
          {window.opener ? (
            <p>
              This window was opened because anther site used the javascript
              code <code>window.open()</code>
            </p>
          ) : (
            <p>This window was opened manually</p>
          )}
        </div>
      </div>
    </>
  );
};
