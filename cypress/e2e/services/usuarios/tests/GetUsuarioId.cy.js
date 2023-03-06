import * as GetUsuarios from '../requests/GetUsuario.request.spec'

describe('Dado do usuario na api', ()=> {
    context('Quando envio GET/usuarios/{id}', ()=> {
        it('Entao busco usuario pelo id', ()=> {
            GetUsuarios.todosUsuarios().then((resTodosUsuario)=> {
                cy.log(resTodosUsuario.body[0].name)
               expect(resTodosUsuario.status).to.eq(200)
               expect(resTodosUsuario.body[0].name).to.not.be.null
               expect(resTodosUsuario.body[0].name).to.eq('Prof. Durgeshwari Abbott')
            })
        
    })
    
    })
})

