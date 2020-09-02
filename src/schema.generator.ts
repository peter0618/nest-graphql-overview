import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const options: {
  typePaths: string[];
  path: string;
  outputAs?: 'class' | 'interface';
  watch?: boolean;
  debug?: boolean;
  federation?: boolean;
} = {
  typePaths: ['./**/*.graphql'],
  path: join(process.cwd(), 'src/autogen/schema.graphql.ts'),
  outputAs: 'class',
};

(async () => {
  console.log('----------------------------------------------------------------------------------------------------');
  console.log('Start creating classes according to graphql schema defined in each modules...');
  await new GraphQLDefinitionsFactory().generate(options);
  console.log('Finished successfully.');
  console.log('----------------------------------------------------------------------------------------------------');
})();
