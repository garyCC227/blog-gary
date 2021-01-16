### What is RESTful??
***
***REST(Representational State Transfer)***, is an architectureal style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. The following are the major features of RESTful.
##### 1. Stateless
Systems that follow the REST paradigm are stateless, meaning that the server doesn't need to know the state of the client, or vice versa. The only important thing is the resource. In this way, the client and server can understand any message received, event without seeing previous state.

##### 2. Separation of Client and Server
By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components. We need to consider this when we develope the design. One good implementation is -> You can always add columns (fields) to a database table. But don’t take one away. The principle in RESTful services is the same.

##### 3. Cacheable
Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.

##### 4. Uniform interface
The interface need to be uniform that can allow independent evolution of the application without having other side effect. such as using HTTP with URL resources, CURD and JSON for client to use.
##### 5. Layered System
As the name implies, the RESTful system is comprised of layers, each layer has its own specific functionality and responsibility. e.g. MVC framework 

#### Resource(response) in RESTful API 
The most significant thing in RESTful is resource. The state of the resource at any particular timestamp is known as resource representation. A representation consists of data, metadata describing the data and hypermedia links which can help the clients in transition to the next desired state. such as using HATEOAS package to format the resource as [HAL](https://en.wikipedia.org/wiki/Hypertext_Application_Language) style.

### RESTful API with Spring
***
***How to use Spring to build RESTful API***
In Spring, we use the web MVC framework to wrap RESTful application into web layer, and use MVC architecture to handle the incoming request and return resource to client.

![RESTful-flow char](https://raw.githubusercontent.com/garyCC227/blog-gary/gary/blog-app/src/content/RESTful.png)

There are 3 major componenets in MVC framework. 
The first Component is **Dispatcher Servlet**, there are two tasks in dispathcer servlet.
>1.  recieving incoming request, and map it to the specific controller;
>2. the response to Client.

The 2nd component is  called **Controller**, there are also 2 tasks in the controller; 
>1. Action Mapping, which is  mapping the incoming URL endpoints with the HTTP method to get the specific resource with 3rd Component Model. So, The HTTP method are the 4 standard one, GET, POST, PUT, DELETE, which is included in the incoming request. 
>2. Return the recieved resource to the dispatcher servlet, then return to the Client. But normally in this task, we woulid like to format the resource with a better respentation before returning it, to make our application more RESTful. So one of the package in Spring call HATEOAS, we can use this package to format the resource with the HAL style to remove some side effect, so it can make our application more RESTful. 

the 3rd component is **Model**, 
> 1. its task is to get the specific resource for the request, and return it to controller. in order to get the resource,  we use a thing call JPA repository. each JPA repository manage one domain object, and has CRUD method(which is create,...) and query execution and pagination method to interact with the database to get the resource.

***Flow Process***
1. HTTP request send to dispatcher servlet, DS forward the request to handler mapping
2. handler mapping map the  request to specific Contoller
3. Contoller does action mapping with the URL endpoints and actions to know what resource it want, and then ask Model to get it
4. In Model, it use repository method to interact with databse to get the resource, and return resource to controller
5. Controller format the resource with a good representional style, one of the style is HAL. which can be implemented by Spring HATEOAS package.
6. return the resourece as response to client 

### JPA Repository 
***
- Spring Data JPA repositories are interfaces with methods supporting creating, reading, updating, and deleting records against a back end data store
 - The JpaRepository is subclass of CRUD and PagingAndSort([JAVA repository solution](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories)). As you might guess from its name, the CrudRepository interface defines a repository that offers standard create, read, update and delete operations. The PagingAndSortingRepository extends the CrudRepository and adds findAll methods that enable you to sort the result and to retrieve it in a paginated way. Both interface are also supported by other Spring Data projects, so that you can apply the same concepts to different datastores. The JpaRepository adds JPA-specific methods, like flush() to trigger a flush on the persistence context or findAll(Example<S> example) to find entities by example, to the PagingAndSortingRepository. 
 
***
##### My Simple RESTful API implementation with Spring framework
[Github Repository](https://github.com/garyCC227/RESTful_simple)



##### More things are coming
***gradle and pom***



 
