import * as GetUsuarios from '../requests/GetUsuario.request.spec'

describe('Dado do usuario na api', ()=> {
    context('Quando envio GET/usuarios', ()=> {
        it('Entao listo todos os usuarios', ()=> {
            GetUsuarios.todosUsuarios().then((resTodosUsuario)=> {
                cy.log(JSON.stringify(resTodosUsuario.body))
               expect(resTodosUsuario.status).to.eq(200)
               expect(resTodosUsuario.body[0].name).to.not.be.null
               expect(resTodosUsuario.body[0].name).to.eq('Prof. Durgeshwari Abbott')
            })
        
    })
    
    })
})

