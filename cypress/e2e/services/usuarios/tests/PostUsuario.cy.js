import * as  PostUsuarios from '../requests/PostUsuario.request.spec'

describe('Dado a API de usuários', () => {
    context('Quando eu enviar POST /usuarios', () => {
        it('Então ele deve criar um novo usuário', () => {

            PostUsuarios.cadastraUsuario().should((resCadastroUsuario) => {
                expect(resCadastroUsuario.status).to.eq(201)
                expect(resCadastroUsuario.body).to.have.property('name', 'Carolina')
                expect(resCadastroUsuario.body).to.have.property('email', 'teste@teste2.com.br')
            })
        });
    });
});