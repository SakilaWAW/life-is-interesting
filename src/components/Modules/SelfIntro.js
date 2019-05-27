import React, {Fragment} from 'react';
import './SelfIntro.scss';
import Avatar from "../Widgets/Avatar";
import ctx from 'classnames';

const ourIntro = [
    {
        avatar: require('../../assets/Qinze.png'),
        desc: 'Lorem ipsum dolor sit amet, ut pri fugit petentium, te vix quis sonet. Malis detraxit et nam, menandri petentium theophrastus ad usu, ad mel tation primis iriure. Sed ut ocurreret assueverit inciderint. Ad est elitr tation maluisset, nec ad velit utamur. In nam malis laoreet offendit, his et quem praesent, causae iuvaret eu est.',
        avatarPosition: 'right'
    },
    {
        avatar: require('../../assets/VV.png'),
        desc: 'Nam an oblique adipisci temporibus, ut qui putant verear forensibus, probo adversarium nam ad. Eum no congue tantas concludaturque, has putant denique disputationi ea. Fugit corpora pro eu. Pri malorum admodum praesent te, eum nonumes inimicus te. Qui eu odio vocent, nam ubique commodo sapientem at.',
        avatarPosition: 'left'
    }
];


function TheOneIntro({...props}) {
    const {avatar, desc, avatarPosition} = props;
    return (
        <div
            className='one-intro'
            style={avatarPosition === 'left' ? {paddingLeft: '0.3rem'} : {paddingRight: '0.3rem'}}>
            {avatarPosition === 'left'
                ? (
                    <Fragment>
                        <Avatar size={150} src={avatar} className={ctx('intro-avatar')}/>
                        <span className='desc h3'>{desc}</span>
                    </Fragment>
                ) : (
                    <Fragment>
                        <span className={ctx('desc h3')}>{desc}</span>
                        <Avatar size={150} src={avatar} className='intro-avatar'/>
                    </Fragment>
                )
            }

        </div>
    )
}

export default function SelfIntro({...props}) {
    return (
        <div className='module self-intro'>
            <div className='title h1'>About us</div>
            <div className='intro-area'>
                {ourIntro.map((intro, idx) =>
                    <TheOneIntro
                        key={`intro-${idx}`}
                        desc={intro.desc}
                        avatar={intro.avatar}
                        avatarPosition={intro.avatarPosition}
                    />)}
            </div>
        </div>
    )
}