# GraphQL
Learn GraphQL by writing full-stack JavaScript applications with Node.js, Express, Apollo Server, React, Apollo Client.

# Introduction
## What's is GraphQL
<img width="1340" alt="image" src="https://user-images.githubusercontent.com/85268263/155052300-a11defc0-e89a-43eb-b7d4-75a586cf941a.png">
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

## Defining a Schema

```sh
yusuf@Yusufs-MacBook-Pro GraphQL % node server.js
{
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    }
  ],
  loc: Location {
    start: 0,
    end: 49,
    source: Source {
      body: '\n    type Query {\n        greeting: String\n    }\n',
      name: 'GraphQL request',
      locationOffset: [Object]
    }
  }
}
```

```sh
yusuf@Yusufs-MacBook-Pro GraphQL % node server.js
server running on http://localhost:9000/
```

<img width="912" alt="image" src="https://user-images.githubusercontent.com/85268263/155063419-aa07d72e-0e4b-410f-8dbb-7b8fb51c9dc6.png">

