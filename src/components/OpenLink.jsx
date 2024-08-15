const OpenLink = ({ tittle, url }) => {
    return (
        <div>
            <a
              className="App-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tittle}
            </a>
        </div>
    );
};

export default OpenLink;