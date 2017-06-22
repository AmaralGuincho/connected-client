import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Funcionarios = new Mongo.Collection('Funcionarios');

const FuncionariosSchema = new SimpleSchema({
  nome: String,
  sobrenome: String,
  cargo: String,
  nascimento: Date,
  cpf: SimpleSchema.Integer,
  rg: SimpleSchema.Integer,
  sexo: String,
  email: String,
  cep: SimpleSchema.Integer,
  endereco: String,
});

Funcionarios.attachSchema(FuncionariosSchema);

if (Meteor.isServer) {
  Meteor.publish('allFuncionarios', () => Funcionarios.find({}, {
    limit: 50,
  }));

  Meteor.methods({
    insertNewFuncionario(data) {
      Funcionarios.insert({
        nome: {
          text: data.nome,
          value: 0,
        },
        sobrenome: {
          text: data.sobrenome,
          value: 0,
        },
        cargo: {
          text: data.cargo,
          value: 0,
        },
        nascimento: {
          text: data.nascimento,
          value: 0,
        },
        cpf: {
          text: data.cpf,
          value: 0,
        },
        rg: {
          text: data.rg,
          value: 0,
        },
        sexo: {
          text: data.sexo,
          value: 0,
        },
        email: {
          text: data.email,
          value: 0,
        },
        cep: {
          text: data.cep,
          value: 0,
        },
        endereco: {
          text: data.endereco,
          value: 0,
        },
      });
    },
  });
}

export default Funcionarios;
