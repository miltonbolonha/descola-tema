import { React, useState } from '../dependencies'

import Header from '../components/Header'

const HeaderContainer = ({ logo, opt }) => {
	const logoHeader = opt ? opt.logoHeader : null
	const hasMainMenu = opt ? opt.mainMenu : null
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Header
			logo={logo}
			refState={refState}
			handleRefState={handleRefState}
			logoComponent={logoHeader}
			mainMenu={hasMainMenu}
		/>
	)
}
export default HeaderContainer
