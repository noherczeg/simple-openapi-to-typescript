import { createPath, method, RequestBody, headers } from './odata-openapi/northwind/paths/AddNewEntityToRelatedEmployees';
import { NorthwindModelEmployee } from './odata-openapi/northwind/components/schemas/NorthwindModelEmployee';
import { Error } from './odata-openapi/northwind/components/responses/Error';
import { createBaseUrl } from './odata-openapi/northwind/common/Common';

const payload: RequestBody = {
  EmployeeID: 11,
  FirstName: 'John',
  LastName: 'Doe',
};

const url = createPath({ TerritoryID: 'ABC' }, createBaseUrl((servers) => servers[0].url));

fetch(url, {
  method,
  headers: {
    ...headers,
    'X-Custom-Header': 'Yay, some value!',
  },
  body: JSON.stringify(payload),
})
  .then((response) => response.json())
  .then((employee: NorthwindModelEmployee) => console.dir(employee))
  .catch((err: Error) => console.error(err));
