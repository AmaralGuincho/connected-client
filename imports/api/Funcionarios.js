/* eslint import/no-unresolved: 1*/

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Match } from 'meteor/check';

import Text from 'simple-react-form-material-ui/lib/text';
// import DatePicker from 'simple-react-form-material-ui/lib/date-picker';

SimpleSchema.extendOptions({
  srt: Match.Optional(Object),
});

const Funcionarios = new Mongo.Collection('Funcionarios');

const FuncionariosSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    optional: false,
    srt: {
      type: Text,
    },
  },
  lastname: {
    type: String,
    label: 'Sobrenome',
    optional: true,
    srt: {
      type: Text,
    },
  },
  occupation: {
    type: String,
    label: 'Cargo',
    optional: true,
    srt: {
      type: Text,
    },
  },
  dob: {
    type: Date,
    label: 'Nascimento',
    optional: true,
    srt: {
      type: Text,
    },
  },
  cpf: {
    type: String,
    label: 'CPF',
    optional: true,
    srt: {
      type: Text,
    },
  },
  rg: {
    type: String,
    label: 'RG',
    optional: true,
    srt: {
      type: Text,
    },
  },
  sex: {
    type: String,
    label: 'Sexo',
    optional: true,
    srt: {
      type: Text,
    },
  },
  email: {
    type: String,
    label: 'Email',
    optional: true,
    srt: {
      type: Text,
    },
  },
  phone: {
    type: String,
    label: 'Celular',
    optional: true,
    srt: {
      type: Text,
    },
  },
  cep: {
    type: String,
    label: 'CEP',
    optional: true,
    srt: {
      type: Text,
    },
  },
  address: {
    type: String,
    label: 'Endereco',
    optional: true,
    srt: {
      type: Text,
    },
  },
  createdAt: {
    type: Date,
  },
  enabled: {
    type: String,
  },
});

Funcionarios.attachSchema(FuncionariosSchema);

export default Funcionarios;
