import { createPath, method, RequestBody, headers } from './odata-openapi/northwind/paths/AddNewEntityToRelatedEmployees';
import { NorthwindModelEmployee } from './odata-openapi/northwind/components/schemas/NorthwindModelEmployee';
import { Error } from './odata-openapi/northwind/components/schemas/Error';
import { createBaseUrl } from './odata-openapi/northwind/common/Common';
import { MediaTypes } from './odata-openapi/northwind/constants/MediaTypes';

const payload: RequestBody = {
  EmployeeID: 11,
  FirstName: 'John',
  LastName: 'Doe',
};

const url = createPath({ TerritoryID: 'ABC' }, createBaseUrl((servers) => servers[0].url));

fetch(url, {
  method,
  headers: {
    'Accept': MediaTypes.APPLICATION_JSON,
    ...headers,
  },
  body: JSON.stringify(payload),
})
  .then((response) => response.json())
  .then((employee: NorthwindModelEmployee) => console.dir(employee))
  .catch((err: Error) => console.error(err));
