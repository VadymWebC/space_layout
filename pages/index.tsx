import styles from '../styles/home.module.scss'
import cl from 'classnames'

import { Logo } from '../components/Logo'
import { SocialNetworks } from '../components/SocialNetworks'
import { ArtButton } from '../components/ArtButton'
import { ButtonSVG } from '../components/ButtonSVG'
import { ButtonSVG2 } from '../components/ButtonSVG2'
import { ButtonSVG3 } from '../components/ButtonSVG3'
import { Navigation } from '../components/Navigation'
import { Title } from '../components/Title'

export default function Home() {
    return (
        <div>
            <section className={cl(styles.section, styles.sectionMain)}>
                <header className={styles.header}>
                    <Logo />
                    <SocialNetworks />
                    <ArtButton onClick={() => {}}>Whitepaper</ArtButton>
                </header>

                <Navigation />

                <div>
                    <Title>From dusk to&nbsp;dawn</Title>
                    <ul className={styles.buttonList}>
                        <li>
                            <ButtonSVG2 onClick={() => {}}>Mint</ButtonSVG2>
                        </li>
                        <ButtonSVG2 onClick={() => {}}>
                            Connect Wallet
                        </ButtonSVG2>
                    </ul>
                </div>
            </section>
        </div>
    )
}
