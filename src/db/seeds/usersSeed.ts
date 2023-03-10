import { ContractTypes, Genders, MaritalStatuses, Positions } from '../../graphql/service/User/typedefs/userEnums'

export const USER_DATA = [
  {
    SSN: '1',
    bio: 'ᕦ( ⊡ 益 ⊡ )ᕤ',
    birthday: null,
    conrtactType: ContractTypes.YEAR_1,
    email: 'test1@example.com',
    firstName: 'Yazan',
    gender: Genders.MALE,
    id: '3cad8374-fbac-401b-af70-ddac3dd0b63c',
    isSmoker: false,
    lastName: 'Alhaj',
    maritalStatus: MaritalStatuses.MARRIED,
    position: Positions.QA,
    startedAt: new Date(),
  },
  {
    SSN: '2',
    bio: "it's me",
    birthday: new Date('01/21/1990'),
    conrtactType: ContractTypes.PERMENENT,
    email: 'test2@example.com',
    firstName: 'Mohammad',
    gender: Genders.MALE,
    id: '67c83332-9ed9-4854-b015-66bc06724b9f',
    isSmoker: true,
    lastName: 'Massaid',
    maritalStatus: MaritalStatuses.MARRIED,
    position: Positions.SOFTWARE_ENGINEER,
    startedAt: new Date(),
  },
  {
    SSN: '3',
    bio: "it's me",
    birthday: null,
    conrtactType: ContractTypes.CONTRACTOR,
    email: 'test3@example.com',
    firstName: "Ala'a",
    gender: Genders.FEMALE,
    id: 'bca41947-6559-4f63-9b85-9cf04181fa75',
    isSmoker: false,
    lastName: 'idk',
    maritalStatus: MaritalStatuses.SINGLE,
    position: Positions.DEVOPS,
    startedAt: new Date(),
  },
  {
    SSN: '4',
    bio: 'woof',
    birthday: null,
    conrtactType: ContractTypes.CONTRACTOR,
    email: 'test4@example.com',
    firstName: 'Leen',
    gender: Genders.FEMALE,
    id: '4578c118-0946-495e-a2ec-148923666044',
    isBanned: true,
    isSmoker: false,
    lastName: 'Kilani',
    maritalStatus: MaritalStatuses.MARRIED,
    position: Positions.DEVOPS,
    startedAt: new Date(),
  },
]
