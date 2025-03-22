import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="140px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80) 50% 15%/cover"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" sm-align-items="center" />
			<Box width="100%">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="50px"
					text-transform="uppercase"
					font="100 132px/1.2 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Mary
					<br />
					Cornell
				</Text>
			</Box>
			<Box display="flex" margin="-16px -16px -16px -16px" flex-wrap="wrap" width="100%">
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex" font="--lead">
						<Text margin="0px">
							About me
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							My name is Mary Cornell, born and raised in France.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							I've been working as a professional photographer and videographer for more than 12 years.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							CDS Documentary Essay Prize and Best Photographer of The Year 2019 by Sony World Photography Awards.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Box min-width="100px" min-height="100px">
			<Button>
				Button
			</Button>
		</Box>
		<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"67df2358e5d27700189cc9fb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});