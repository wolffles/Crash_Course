#RAILS

## Rails Routes and it's MVC architecture
  * Model
    Maintains the relationship between Object and Database and handles validation, association, transactions
  * View 
    A presentation of data in a particular format, triggered by a controllers's Decision to present the data
  * Controller
    the facility within the application taht directs traffic, on the one hand querying the models for specific data, and on the other orgainzing that data (searching, sorting) into a form that fits the needs of a given view.
### the Request Response CYCLE ON A RAILS APPLICATION
  * you type a URL into the browser it makes a request to the server. In the server, we have the Rails web application. The Rails Router verifies if there is an entry matching the requested URL.

  we just need to configure the routes for this line:
  `resources :we_choose_articles`
  This will create Restful routes for articles. if we run bundle exec rake routes it will show the list of paths created. 
  HTTP VERB   PATH                          Controller#Action
  GET         /articles(.:format)           articles#index
  POST        /articles(.:format)           articles#create
  GET         /articles/new(.:format)       articles#new
  GET         /articles/:id/edit(.:format)  articles#edit
  GET         /articles/:id(.:format)       articles#show
  PATCH       /articles/:id(.:format)       articles#update
  PUT         /articles/:id(.:format)       articles#update
  DELETE      /articles/:id(.:format)       articles#destroy

  in our case the server will recieve articles path and GET as the HTTP verb. it will map to Articles Controller and index action. 
  In the controller ArticlesController we use the model article to get all articles in the database and render the view. index.html.erb as the server response

  ```
    class ArticlesController < ApplicationController
      def index
        @articles = Article.all
      end
    end
````
by convention, this controller will render the view in `views/articles/index.html.erb` basically its a HTMl powered by Ruby
