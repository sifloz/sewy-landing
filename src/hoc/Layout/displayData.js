import * as assetsLibrary from '../../assets/assetsLibrary';

export const instructions = {
    client: {
        first: {
            title: 'Entra en la App',
            highlight: 'Busca a personas que ofrecen servicios cerca de ti.',
            description: ['Recomendaciones y puntuaciones.','Opiniones de clientes.','Servicios que ofrecen.','Disponibilidad.'],
            image: assetsLibrary.mockupClient1,
            mockupPosition: 'left',
        },
        second: {
            title: 'Selecciona',
            description: ['Quién quieres que realice el servicio.', 'Elige una fecha en la acudirás y el servicio que quieres realizar.'],
            image: assetsLibrary.mockupClient2,
            mockupPosition: 'right',
        },
        third: {
            title: 'La App te avisará',
            description: ['Una vez que acudas con la persona a realizar el servicio, la app te avisará cuando esté listo, además del monto a pagar.'],
            image: assetsLibrary.mockupClient3,
            mockupPosition: 'left',
        },
        fourth: {
            title: 'Califica el servicio',
            description: ['Una vez concluído el servicio, podrás calificarlo, ayudando así a que otras personas se interesen y encuentren a aquellos que hacen las cosas bien.'],
            image: assetsLibrary.mockupClient4,
            mockupPosition: 'right',
        },
    },
    business: {
        first: {
            title: 'Anúnciate',
            highlight: 'Selecciona el tipo de servicos que realizas.',
            description: ['También establece cuando tus clientes pueden contactarte.'],
            image: assetsLibrary.mockupBusiness1,
            mockupPosition: 'left',
        },
        second: {
            title: 'Gestión de servicios',
            highlight: 'Administra los pedidos de los servicios que ofreces.',
            description: ['Avísle a tus clientes cuando su servicio esté listo.'],
            image: assetsLibrary.mockupBusiness2,
            mockupPosition: 'right',
        },
        third: {
            title: 'Recomendaciones',
            description: ['Ve lo que a tus clientes les gusta de tu servicio, y lo que podrías mejorar para crecer.'],
            image: assetsLibrary.mockupBusiness3,
            mockupPosition: 'left',
        },
    }
};

export const summaries = {
    client: {
        title: '¿Qué es Sewy?',
        description: ['Sewy es una plataforma que conecta a sastres y costureras con sus clientes, así como proveedores de otros servicios.'],
    },
    business: {
        title: 'Unete a Sewy',
        description: ['Sewy es una plataforma que conecta a tus clientes con tu negocio. Nuestra App recomienda tus servicios a tus clientes en base a las recomendaciones que ellos hacen. Asegurando que encuentran lo que buscan y que tú puedas ofrecerles lo mejor.'],
    },
};

