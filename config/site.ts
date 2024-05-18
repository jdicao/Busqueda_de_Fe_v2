export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "13 de Enero",
	description: "Búsqueda de FE",
	navItems: [
		
		{
			label: "Inicio",
			href: "/",
		},
		
		{
			label: "Pasajes",
			href: "/biblia/busqueda",
		},
		{
			label: "Libros",
			href: "/biblia/libros",
		},
		{
			label: "Santo Rosario",
			href: "/rezos/rosario",
		},
	],
	navMenuItems: [
		
		{
			label: "Inicio",
			href: "/",
		},
		
		{
			label: "Pasajes",
			href: "/biblia/busqueda",
		},
		{
			label: "Libros",
			href: "/biblia/libros",
		},
		{
			label: "Santo Rosario",
			href: "/rezos/rosario",
		},
		
	],
	links: {
		github: "https://github.com/jdicao",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",

	},
};
