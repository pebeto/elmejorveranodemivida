import React from 'react';
import { withTranslation } from 'react-i18next';

import './contact.css';

import lotrMemePhoto from '../../assets/images/lotr.webp';
import normalMemePhoto from '../../assets/images/normal.webp';

class Contact extends React.Component {
    state = {
        memePhoto: normalMemePhoto,
    };

    getContactCategories() {
        let contactCategories = '';
        let categories = ['press', 'booking', 'colaboration', 'other'];
        for (let category of categories) {
            contactCategories +=
                this.props.t('contact.email.category.' + category) + ', ';
        }
        return contactCategories.slice(0, -2);
    }

    swapMemePhoto() {
        this.setState({
            memePhoto:
                this.state.memePhoto === normalMemePhoto
                    ? lotrMemePhoto
                    : normalMemePhoto,
        });
    }

    render() {
        return (
            <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-full lg:w-1/2">
                    <figure>
                        <img
                            className="w-full"
                            src={this.state.memePhoto}
                            alt="Contact meme"
                            onClick={() => { this.swapMemePhoto() }}
                        />
                    </figure>
                </div>
                <div className="px-2 w-full lg:w-1/2">
                    <div>
                        <div className="contact_text">
                            {this.props.t('contact.email.info1')}
                            <div>
                                <i>[{this.getContactCategories()}]</i>
                            </div>
                        </div>
                        <div className="contact_text">
                            <b>{this.props.t('contact.email')}:</b>{' '}
                            <a
                                className="contact_links"
                                href="mailto:elmejorveranodemivida@tutanota.com"
                            >
                                elmejorveranodemivida@tutanota.com
                            </a>
                        </div>
                        <div className="contact_text">
                            {this.props.t('contact.email.info2')}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Contact);