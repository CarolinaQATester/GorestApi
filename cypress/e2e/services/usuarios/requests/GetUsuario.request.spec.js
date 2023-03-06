/// <reference types = "Cypress"/>

function todosUsuarios(id){
   
    return cy.request({
         method : 'GET',
         url: '/users',
         headers: {
            'authorization': 'Bearer b7bdc0485c1046c5906b92d052bd56f906a9e3120ccfc9c80682958325668fb3'
         },
         failOnStatusCode:false,
     })
 }
export {todosUsuarios}