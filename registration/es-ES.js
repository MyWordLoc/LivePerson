/**
 * User: omerh
 * Date: 3/20/13
 */
define(function () {
    "use strict";

    var Dictionary = {
        // example module dictionary, pay attention that every key should start with the module name and then the key name
        "SignUpForFree": "Regístrese gratis",
        "EmailAddress": "Dirección de correo electrónico",
        "LetGetStarted": "Comencemos",
        "registered.label": "¿Ya está registrado?",
        "registered.signIn": "Iniciar sesión.",

        "notAvailable": "N/A",

        "CreateYourAccount": "Cree su cuenta",
        "Name": "Nombre",
        "ChoosePassword": "Contraseña (mín. 8 caracteres)",
        "ConfirmPassword": "Confirmar contraseña",
        "Website": "URL del sitio Web",
        "Country": "País",
        "Industry": "Sector",
        "TypeLettersFieldBelow": "Pregunta de seguridad",
        "ReadAndAgreed": "Al registrarse, usted acepta el",
        "TermsAndConditions": "Términos y condiciones",
        "LicenseAgreement": "acuerdo de licencia",
        "CreateAccount": "Crear cuenta",

        "WelcomeToLiveEngage": "¡Bienvenido! Comience a comprometerse con sus clientes y a conseguir resultados.",
        "SignUpBullet1BeforeBold": "Es ",
        "SignUpBullet1Bold": "100% libre de riesgos",
        "SignUpBullet1AfterBold": " y no se requiere tarjeta de crédito!",
        "SignUpBullet2": "Consiga acceso completo a la prueba gratuita de 30 días",
        "SignUpBullet2New": "Acceso completo a 1 usuario registrado, totalmente gratis",
        "SignUpBullet3": "Comenzar es muy fácil",
        "ThankYouForSigningUp": "¡Gracias por registrarse!",
        "SentConfirmationEmail": "Le hemos enviado un correo de confirmación a:",
        "ClickConfirmationButtonEmailStarted": "Haga clic en el botón de confirmación del correo para comenzar.",
        "PleaseCheckYourEmailSpam": "Si no ha recibido el correo, compruebe su carpeta de spam o añada registration@liveperson.com a su libreta de direcciones.",

        "SomethingWentWrong": "Se ha producido un fallo.",
        "ErrorCode": "(Código de error: {0})",
        "TryAgainLink": "Inténtelo de nuevo",
        "Please": "Por favor",
        "EnterYourFullName": "Introduzca su nombre completo",
        "EnterYourWebsiteAddressURL": "Introduzca la dirección URL de su sitio Web",
        "EnterYourPassword": "Introduzca su contraseña",
        "ConfirmYourPassword": "Confirme su contraseña",

        "YourSiteNotTagged": "Su sitio Web no está etiquetado aún.",

        "TaggingYourWebsiteEasy": "Es fácil etiquetar su sitio Web:",
        "SelectAndCopyLpTag": "Seleccione y copie la etiqueta de LiveEngage.",
        "PasteSourceCode": "Péguela en el código fuente, directamente bajo la",
        "TagAllYourWebPages": "etiqueta de todas sus páginas Web.",
        "DeployingLpTagEnables": "Al implementar la etiqueta de LiveEngage, usted podrá:",
        "PublishCampaignsAndEngagements": "Publicar campañas y interacciónes",
        "TrackRelevantDataYourWebsite": "Realizar un seguimiento de los datos de su sitio Web",
        "EngageYourCustomers": "Comprometa a sus clientes de forma inteligente en tiempo real",
        "button.done": "Listo",


        //Assisted Sale

        "assistedSale.title": "Su plan personal",
        "assistedSale.description": "Este es el plan hecho a medida para usted por uno de nuestros agentes. Revise los detalles y haga clic en Siguiente para continuar.",
        "assistedSale.footer.label": "¿Necesita nuestra ayuda?",

        //PlanSelection

        "planSelection.title": "Elija un plan que se adapte a sus necesidades",
        "planSelection.description": "Muestra tantas invitaciones de chat y banners como desee; sólo pague por los visitantes que interactúen con usted.",
        "planSelection.learn.more": "Más información",
        "planSelection.engagementsUseTextStart": "Tenía",
        "planSelection.engagementsUseTextEnd": "interacciones hasta ahora",
        "planSelection.engagementsUseDescriptionText": "Interacción = Cualquier interacción con sus visitantes (como chat o clic en banner) ",
        "planSelection.engagementsLabel": "Interacciones",
        // "planSelection.perMonthLabel": "/mo",
        "planSelection.discountLabel": "descuento",
        "planSelection.discountText": "por el primer periodo",
        "planSelection.listPriceLabel": "Precio listado",
        "planSelection.moreOptionsLabel": "Más opciones",
        "planSelection.moreOptionsDescription": "Hable con nuestros agentes para encontrar el plan adecuado para usted",
        "planSelection.additionalLabel": "para cada interacción adicional",
        "planSelection.chatNowBtn": "Hablar ahora",
        "planSelection.upgrade.success": "Su cuenta ha sido actualizada correctamente.",
        "planSelection.engagementsPerMonthLabel": "Interacciones por mes",
        "planSelection.perMonthLabel": "Por mes - pagado {0}",
        "planSelection.periodTotalLabel": "total {0}",
        "planSelection.choosePlan.buttonLabel": "Elegir este plan",
        "planSelection.choosePlan.buttonLabel.current": "Plan actual",
        "planSelection.footer.label": "¿Necesita ayuda para encontrar el plan adecuado?",
        "planSelection.footer.chat": "Hable con nosotros.",
        "planSelection.already.amended": "Ha tiene un plan modificado pendiente.",
        "planSelection.rounding.disclaimer": "*Precios redondeados al dólar más cercano.",
        "planSelection.term.initial": "Su plazo está establecido a {0} meses.",
        "planSelection.term.amendedWithTerm": "Al inscribirse en este nuevo plan, usted acepta un plazo de {0} mes, comenzando el {1}. Su nuevo plan comenzará en esa fecha y su plan antiguo continuará hasta dicha fecha (incluyendo cualquier tarifa de exceso). Consulte el Acuerdo de Licencia para ver los términos y condiciones relacionados con su Plan (incluyendo cancelación).",
        "planSelection.term.amendedWithoutTerm": "Su nuevo plan comenzará el {0} y su plan antiguo continuará hasta dicha fecha (incluyendo cualquier tarifa de exceso). Consulte el Acuerdo de Licencia para ver los términos y condiciones relacionados con su Plan (incluyendo cancelación).",
        "planSelection.noPaymentMethod": "Los ajustes de su cuenta requieren solo cambio de Nivel manual. Hable con nuestros representantes.",
        "planSelection.opened.in.new.window": "Se acaba de abrir una nueva ventana del navegador para que actualice su plan",

        "plan.billing.period": "Ciclo de facturación",
        "plan.period.annual": "Anual",
        "plan.period.semi.annual": "Semi anual",
        "plan.period.month": "Mensualmente",
        "plan.period.quarter": "Trimestralmente",
        "plan.period.three.years": "Cada tres años",
        "plan.recommended": "Recomendado",
        "plan.savings": "Ahorros totales",
        "plan.personal": "Oferta personal",
        "plan.error.chatWithUs": "Operación fallida; hable con nosotros.",
        "plan.findPersonal.label": "Encuentre su oferta personal en el ",
        "plan.billing.dashboard": "Panel de control de facturación",
        "plan.discount.percentage": "{0}% de descuento",
        // MY ACCOUNT PAGE
        "myAccount.title": "Mi cuenta",
        "myAccount.description": "Vea los detalles de su plan y la información de facturación.",
        "myAccount.owner.title": "Propietario de la cuenta",
        "myAccount.owner.update.link": "Actualizar datos del propietario",
        "myAccount.owner.email.tooltip": "Todos los correos electrónicos y notificaciones relacionados con el uso, marketing y promociones se enviarán a esta dirección de correo electrónico. Si desea cambiar la dirección, siga el vínculo bajo \"actualizar datos del propietario\".",
        "myAccount.plan.title": "Mi plan",
        "myAccount.plan.reports.link": "Ver informes",
        "myAccount.plan.change.link": "Cambiar mi plan",
        "myAccount.plan.seatBased": "Usted tiene un Plan de 2 usuarios. No hay más información en este momento.",
        "myAccount.payment.title": "Datos de pago",
        "myAccount.payment.update.link": "Actualizar datos de pago",
        "myAccount.invoices.title": "Facturas",
        "myAccount.invoices.view.link": "Ver todas mis facturas",
        "myAccount.invoices.table.invoice": "FACTURA Nº",
        "myAccount.invoices.table.billingDate": "FECHA DE FACTURACIÓN",
        "myAccount.invoices.table.status": "ESTADO",
        "myAccount.invoices.table.billingAmount": "IMPORTE FACTURADO",
        "myAccount.invoices.table.balance": "SALDO",
        "myAccount.current.usage": "Uso mensual actual",
        "myAccount.current.usage.engagements": "  interacciones",
        "myAccount.current.quota": "Interacciones por mes",
        "myAccount.current.monthly.rate": "/mo - pagado {0}",
        "myAccount.current.overages": "por cada interacción adicional se cobrará mensualmente",
        "myAccount.current.discount": "descuento por el primer año",
        "myAccount.current.discountPending": "descuento por el primer año (finaliza el {0})",
        "myAccount.amendment.new": "Nuevo plan pendiente ",
        "myAccount.amendment.starting": "(Comienza el {0})",
        "myAccount.needSupport": "¿Necesita asistencia?",
        "myAccount.chatWithUs": "Hable con nosotros",
        "myAccount.seatsAvailable": " - asientos disponibles",
        "myAccount.overages.notification": "Ha usado todas sus interacciones para el mes",
        "myAccount.overages.notification.link": "Actualizar ahora",
        "myAccount.usage.notification": "Ha usado {0} de sus interacciones. Descubra como sacar el máximo partido a lo que queda.",
        "myAccount.usage.notification.link": "Más información",
        "myAccount.pane.loader.text": "Cargando su información {0}",
        "myAccount.pane.loader.error": "Se ha producido un error al cargar su información {0}",


        //Buy now
        "BuyNow.stepIndicator.step01": "PLAN PERSONAL",
        "BuyNow.stepIndicator.step0": "ELEGIR UN PLAN",
        "BuyNow.stepIndicator.step1": "CREE SU CUENTA",
        "BuyNow.stepIndicator.step2": "DETALLES DE FACTURACIÓN",
        "BuyNow.stepIndicator.step3": "CONFIRMAR COMPRA",
        "BuyNowInfo.next.button": "Siguiente",
        "BuyNowInfo.confirm": "Confirmar compra",
        "BuyNowInfo.purchase.button": "Confirmar",
        "BuyNowInfo.confirmation.title": "Detalles de facturación",
        "BuyNowInfo.confirmation.footnote": "Formulario seguro",

        "BuyNowInfo.checkout.creditCardType": "Tipo de tarjeta",
        "BuyNowInfo.checkout.creditCardNumber": "Número de tarjeta",
        "BuyNowInfo.checkout.creditCardExpirationDate": "Fecha de vencimiento",
        "BuyNowInfo.checkout.cardSecurityCode": "CVV",
        "BuyNowInfo.checkout.creditCardHolderName": "Titular de la tarjeta",
        "BuyNowInfo.checkout.creditCardCountry": "País",
        "BuyNowInfo.checkout.creditCardAddress1": "Dirección",
        "BuyNowInfo.checkout.creditCardCity": "Ciudad",
        "BuyNowInfo.checkout.creditCardState": "Estado",
        "BuyNowInfo.checkout.creditCardPostalCode": "Código postal",
        "BuyNowInfo.checkout.phone": "Número de teléfono de contacto",
        "BuyNowInfo.checkout.email": "Dirección de correo electrónico.",
        "BuyNowInfo.checkout.zuora.general.error": "Operación fallida; inténtelo de nuevo.",

        "Confirmation.account.details": "Detalles de la cuenta",
        "Confirmation.package.details": "Detalles del paquete",
        "Confirmation.annual.payment": "Pago anual",
        "Confirmation.monthly.payment": "Pago mes a mes (plazo de 12 meses)",
        "Confirmation.monthly.total.payment": "Total / mes", //TODO: a new key for hotfix
        "Confirmation.three.years.payment": "Pago en tres años",
        "Confirmation.quarterly.payment": "Pago trimestral",
        "Confirmation.additional.engagement": "se cobrará por cada crédito de interacción adicional del importe de su paquete mensual.",
        "Confirmation.total.annual.payment": "Pago anual total",
        "Confirmation.total.payment": "Total",
        "Confirmation.first.month.payment": "Primer pago mensual",
        "Confirmation.you.saved": "Usted ahorra",
        "Confirmation.discount": "descuento",
        "Confirmation.first.month": "por el primer mes",
        "Confirmation.first.year": "por el primer año",
        "Confirmation.credits.per.month": "créditos por mes",
        "Confirmation.credits.per.year": "créditos por año",
        "Confirmation.first.period": "por el primer periodo",
        "Confirmation.legal.title": "¡Está casi listo!  Queremos asegurarnos de que no se lleva sorpresas de facturación:",
        "Confirmation.legal.text": "<p> Cualquier crédito de interacción usado sobre el importe incluido en su plan mensual se cobrará al final de cada mes a un precio de {0}$ por interacción. Recibirá notificaciones por correo electrónico cuando se acerque a su límite de interacciones. </p>" +
        "<br>" +
        "<p> Si seleccionó un plan anual, verá dos cargos iniciales en la tarjeta de crédito de LIVEPERSON INC:</p>" +
        "<p> 1. Un cobro prorrata para este mes actual.</p>" +
        "<p> 2. Un segundo cobro por el Importe total en base al paquete seleccionado. Tras la fecha de aniversario de la creación de su cuenta, se le cobrará un precio de renovación para otro año completo (a menos que cancele según nuestros términos y condiciones).</p>" +
        "<br>" +
        "<p> Cualquier crédito usado por encima del importe del plan mensual, se cobrará al final del mes.</p>",


        //Errors
        "PleaseEnterValidEmail": "Introduzca un correo electrónico válido.",
        "EnterValidPassword": "La contraseña debe tener al menos 8 caracteres.",
        "PleaseEnterPassword": "Introduzca una contraseña.",
        "FieldMandatory": "El campo es obligatorio.",
        "FieldNotValid": "El campo no es válido.",
        "InvalidFiled": "{0}: El campo no es válido.",
        "MandatoryField": "{0}: El campo es obligatorio.",
        "InvalidCreditCardNumber": "Compruebe los datos de la tarjeta de crédito para asegurar que fueron introducidos correctamente.",
        "VerificationFailed": "{0} verificación fallida.",
        "PasswordsNotMatch": "Las contraseñas no coinciden.",
        "PleaseEnterValidWebsite": "Introduzca un sitio Web válido.",
        "error.enter.valid.name": "Introduzca un nombre válido.",
        "error.enter.valid.first.name": "Introduzca un nombre válido.",
        "error.enter.valid.last.name": "Introduzca un apellido válido.",

        // Pages

        // Fields
        "Fields.label.first.name": "Nombre",
        "Fields.placeholder.first.name": "Introducir nombre",
        "Fields.label.last.name": "Apellidos",
        "Fields.placeholder.last.name": "Introducir apellidos",
        "Fields.placeholder.also.used.user.name": "También usado como su nombre de usuario",

        // Fields Errors
        "Fields.error.enter.first.name": "Introducir nombre",
        "Fields.error.enter.last.name": "Introducir apellidos",

        // Actions (Buttons & links)
        "Actions.next": "Siguiente",
        "Actions.purchase": "Compra",
        "Actions.edit": "modificar",

        // Shopify
        "Fields.placeholder.shop.name": "Introduzca la URL de su tienda",
        "Fields.placeholder.shop.label": "Conecte con Shopify",
        "Fields.placeholder.shop.connect": "Conectar",
        "shopify.success": "Ha conectado correctamente su tienda a LiveEngage",
        "shopify.refresh": "Actualizar cuando inicie sesión",
        "shopify.login": "Iniciar sesión",
        "shopify.register": "Registro",
        "shopify.title": "Conexión Shopify",
        "shopify.description": "Para conectar su tienda a LiveEngage, debe iniciar primero sesión. Si se ha registrado, seleccione el botón Iniciar sesión. Si necesita registrarse, seleccione el botón Registro. Una vez que haya completado el registro, vuelva a esta página y pulse el botón Actualizar."
    };
    return Dictionary;
});
