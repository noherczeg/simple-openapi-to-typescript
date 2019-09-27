const fs = require('fs');
const path = require('path');
const generator = require('./index');

const odataOpenApiPath = './examples/odata-openapi/northwind';
const openApiPetStorePath = './examples/OpenAPI-Specification/petstore';
const openApiPetStoreWithOptionsPath = './examples/OpenAPI-Specification/petstore-with-options';
const openApiPetStoreExpPath = './examples/OpenAPI-Specification/petstore-expanded';
const openApiLinkPath = './examples/OpenAPI-Specification/link';
const openApiUsptoPath = './examples/OpenAPI-Specification/uspto';
const schemaOutputFor = (root, fileName) => fs.readFileSync(`${root}/components/schemas/${fileName}`).toString();
const pathOutputFor = (root, fileName) => fs.readFileSync(`${root}/paths/${fileName}`).toString();

describe('openapi-web-gen', () => {
  describe('flags', () => {
    beforeAll(() => {
      generator(path.resolve(__dirname, '__fixtures__/OpenAPI-Specification/examples/v3.0/petstore.yaml'), {
        target: openApiPetStoreWithOptionsPath,
        prettierOpts: path.resolve(__dirname, '__fixtures__/OpenAPI-Specification/prettier-custom.json'),
      });
    });

    it('common/Common.ts', () => {
      expect(fs.readFileSync(`${openApiPetStoreWithOptionsPath}/common/Common.ts`).toString()).toMatchSnapshot();
    });
  });

  describe('odata-openapi/Northwind.openapi3.json should generate', () => {
    beforeAll(() => {
      generator(path.resolve(__dirname, '__fixtures__/odata-openapi/examples/Northwind.openapi3.json'), { target: odataOpenApiPath });
    });

    it('common/Common.ts', () => {
      expect(fs.readFileSync(`${odataOpenApiPath}/common/Common.ts`).toString()).toMatchSnapshot();
    });

    it('components/responses/Error.ts', () => {
      expect(fs.readFileSync(`${odataOpenApiPath}/components/responses/Error.ts`).toString()).toMatchSnapshot();
    });

    describe('components/schemas/', () => {
      it('NorthwindModelAlphabeticalListOfProduct.ts', () => {
        expect(schemaOutputFor(odataOpenApiPath, 'NorthwindModelAlphabeticalListOfProduct.ts')).toMatchSnapshot();
      });

      it('NorthwindModelCategory.ts', () => {
        expect(schemaOutputFor(odataOpenApiPath, 'NorthwindModelCategory.ts')).toMatchSnapshot();
      });

      it('NorthwindModelCurrentProductListCreate.ts', () => {
        expect(schemaOutputFor(odataOpenApiPath, 'NorthwindModelCurrentProductListCreate.ts')).toMatchSnapshot();
      });

      it('NorthwindModelCustomer.ts', () => {
        expect(schemaOutputFor(odataOpenApiPath, 'NorthwindModelCustomer.ts')).toMatchSnapshot();
      });

      it('NorthwindModelEmployee.ts', () => {
        expect(schemaOutputFor(odataOpenApiPath, 'NorthwindModelEmployee.ts')).toMatchSnapshot();
      });

      it('NorthwindModelOrderDetail.ts', () => {
        expect(schemaOutputFor(odataOpenApiPath, 'NorthwindModelOrderDetail.ts')).toMatchSnapshot();
      });
    });

    describe('paths/', () => {
      it('GetEntitiesFromSalesTotalsByAmounts.ts', () => {
        expect(pathOutputFor(odataOpenApiPath, 'GetEntitiesFromSalesTotalsByAmounts.ts'))
          .toMatchSnapshot();
      });

      it('GetEntitiesFromRelatedProducts.ts', () => {
        expect(pathOutputFor(odataOpenApiPath, 'GetEntitiesFromRelatedProducts.ts'))
          .toMatchSnapshot();
      });

      it('UpdateEntityInAlphabeticalListOfProducts.ts', () => {
        expect(pathOutputFor(odataOpenApiPath, 'UpdateEntityInAlphabeticalListOfProducts.ts'))
          .toMatchSnapshot();
      });
    });
  });

  describe('OpenAPI-Specification/examples/v3.0/petstore.yaml should generate', () => {
    beforeAll(() => {
      generator(path.resolve(__dirname, '__fixtures__/OpenAPI-Specification/examples/v3.0/petstore.yaml'), { target: openApiPetStorePath });
    });

    it('common/Common.ts', () => {
      expect(fs.readFileSync(`${openApiPetStorePath}/common/Common.ts`).toString()).toMatchSnapshot();
    });

    describe('components/schemas/', () => {
      it('Error.ts', () => {
        expect(schemaOutputFor(openApiPetStorePath, 'Error.ts')).toMatchSnapshot();
      });

      it('Pet.ts', () => {
        expect(schemaOutputFor(openApiPetStorePath, 'Pet.ts')).toMatchSnapshot();
      });

      it('Pets.ts', () => {
        expect(schemaOutputFor(openApiPetStorePath, 'Pets.ts')).toMatchSnapshot();
      });
    });
  });

  describe('OpenAPI-Specification/examples/v3.0/petstore-expanded.yaml should generate', () => {
    beforeAll(() => {
      generator(path.resolve(__dirname, '__fixtures__/OpenAPI-Specification/examples/v3.0/petstore-expanded.yaml'), { target: openApiPetStoreExpPath });
    });

    it('common/Common.ts', () => {
      expect(fs.readFileSync(`${openApiPetStoreExpPath}/common/Common.ts`).toString()).toMatchSnapshot();
    });

    describe('components/schemas/', () => {
      it('Error.ts', () => {
        expect(schemaOutputFor(openApiPetStoreExpPath, 'Error.ts')).toMatchSnapshot();
      });

      it('NewPet.ts', () => {
        expect(schemaOutputFor(openApiPetStoreExpPath, 'NewPet.ts')).toMatchSnapshot();
      });

      it('Pet.ts', () => {
        expect(schemaOutputFor(openApiPetStoreExpPath, 'Pet.ts')).toMatchSnapshot();
      });
    });

    describe('paths/', () => {
      it('AddPet.ts', () => {
        expect(pathOutputFor(openApiPetStoreExpPath, 'AddPet.ts')).toMatchSnapshot();
      });
    });
  });

  describe('OpenAPI-Specification/examples/v3.0/link-example.yaml should generate', () => {
    beforeAll(() => {
      generator(path.resolve(__dirname, '__fixtures__/OpenAPI-Specification/examples/v3.0/link-example.yaml'), { target: openApiLinkPath });
    });

    describe('components/schemas/', () => {
      it('User.ts', () => {
        expect(schemaOutputFor(openApiLinkPath, 'User.ts')).toMatchSnapshot();
      });

      it('Repository.ts', () => {
        expect(schemaOutputFor(openApiLinkPath, 'User.ts')).toMatchSnapshot();
      });

      it('Pullrequest.ts', () => {
        expect(schemaOutputFor(openApiLinkPath, 'User.ts')).toMatchSnapshot();
      });
    });
  });

  describe('OpenAPI-Specification/examples/v3.0/uspto.yaml should generate', () => {
    beforeAll(() => {
      generator(path.resolve(__dirname, '__fixtures__/OpenAPI-Specification/examples/v3.0/uspto.yaml'), { target: openApiUsptoPath });
    });

    it('common/Common.ts', () => {
      expect(fs.readFileSync(`${openApiUsptoPath}/common/Common.ts`).toString()).toMatchSnapshot();
    });

    describe('components/schemas/', () => {
      it('DataSetList.ts', () => {
        expect(schemaOutputFor(openApiUsptoPath, 'DataSetList.ts')).toMatchSnapshot();
      });
    });
  });
});
