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
		label: "Cerrar Sesión",
		
	  },
	],
	links: {
		github: "https://github.com/jdicao",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
   
	},
};
