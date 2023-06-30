import Column from 'components/shared/Column'
import Link from 'components/shared/Link'
import React from 'react'

export default function MobileToggler({ isToggled = false }) {
    return (
        <div className={`nav-toggler w-full ${isToggled ? 'nav-toggler-expanded' : ''} fixed flex items-start justify-center`}>
            <Column className="w-[80%]">
                {/* <Link className="mobile-link" title="Homepage" to="/home" />
                <Link className="mobile-link" title="Features" to="/features" />
                <Link className="mobile-link" title="Pricing" to="/pricing" />
                <Link className="mobile-link" title="About" to="/about" /> */}
            </Column>
        </div>
    )
}
