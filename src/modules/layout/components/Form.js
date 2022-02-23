import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
export default function Form({
	msg,
	success,
	handleSubmit,
	honeypotStateChanger,
	emailStateChanger,
	email,
	honey,
	bot_msg,
	form_class,
	msgStyle,
	// link_url,
	// link_text,
	// has_Link,
	email_placeholder,
	noSPAM,
	warnME,
	placeholder,
	size,
}) {
	return (
		<>
			<div className={form_class}>
				{msg ? <p className={msgStyle}>{msg}</p> : null}
				{success !== 'success' ? (
					<form
						className="main-menu-form validate"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						target="_blank"
						onSubmit={(e) => handleSubmit(e, email, honey)}
						noValidate
					>
						<p className="hidden">
							<label>
								{bot_msg}
								<input
									name="bot-field"
									onChange={(e) => honeypotStateChanger(e.target.value)}
									value={honey}
								/>
							</label>
						</p>
						<input
							type="email"
							name="EMAIL"
							id="mce-EMAIL"
							placeholder={email_placeholder}
							required
							className="inputzim"
							size={size}
							onChange={(e) => emailStateChanger(e.target.value)}
							value={email}
						/>
						{/* <label htmlFor="mce-EMAIL">
							<span className="smallzim">{noSPAM}</span>
						</label> */}
						{/*
<a href={'https://descola.org/cursos?search='}>
	<RiSearchLine />
</a>
*/}
						{honey !== '' ? null : (
							<>
								<button
									type="submit"
									className="main-menu-search-input"
									name="subscribe"
									id="mc-embedded-subscribe"
									disabled={email ? false : true}
								>
									{warnME || <RiSearchLine />}
								</button>
							</>
						)}
					</form>
				) : (
					<>
						<br />
					</>
				)}
			</div>
		</>
	)
}
