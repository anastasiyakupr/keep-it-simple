import React from 'react';


const Media = ({src, heading, children}) => (
    <article className="media">
        <a className="media-left">
            <img className="media-object" src={src} />
        </a>
        <div className="media-body">
            <h4 className="media-heading">
                {heading}
            </h4>
            {children}
        </div>
    </article>
);

Media.propTypes = {
    src: React.PropTypes.string.isRequired,
    heading: React.PropTypes.node.isRequired,
    children: React.PropTypes.node.isRequired
};

export default Media;