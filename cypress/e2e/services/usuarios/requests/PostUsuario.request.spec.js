/// <reference types = "Cypress"/>

const payloadCadastraUsuario = require('../payloads/usuarioPayload.json')

function cadastraUsuario(){
   
    return cy.request({
         method : 'POST',
         url: '/users',
         headers: {
            'authorization': 'Bearer b7bdc0485c1046c5906b92d052bd56f906a9e3120ccfc9c80682958325668fb3'
         },
         body: payloadCadastraUsuario,
         failOnStatusCode:false,
     })
 }
export {cadastraUsuario}