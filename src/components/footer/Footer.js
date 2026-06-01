import React from 'react';
import { hardcorize } from '../../utils';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css';

const Footer = () => {
    return (
        <div className="flex justify-center w-full">
            <div>
                <span className="brand_name">
                    {hardcorize("elmejorveranodemivida")}
                </span>
                - {new Date().getFullYear()}
                <a
                    className="gh_icon"
                    href="https://github.com/pebeto/elmejorveranodemivida/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
            </div>
        </div>
    );
};

export default Footer;