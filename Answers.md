1. What problem does the context API help solve?

    The Context API helps to simplify our state management system. With it we no longer have to prop drill down to the component we want to use our state in. We can use the context API and get our Data from its source to its destination and skip all the components in between. It keeps code cleaner and simpler to read.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    The store is known as the 'single source of truth' because it holds the App state of your application and all your components will reference it. Your components will send 'actions' in the form of objects to the reducers to let the reducer know what kind of 'action' is to take place. The reducer then uses logic in a switch statement to check what kind of action was sent to it, and to perform the state manipulating logic for each task.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application State is the state stored in your top level component(normally called app.js). It is the main data that is passed around and shared between components. Component state is state that is stored in a component that is only necessary to that individual component. This can be temporary data from a form, or UI behavior state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk basically allows us to abstract some of our functionality in our app to our action-creators. Normally action-creators only submit an object to the reducer containing a type(name) of the dispatch and a payload(data). Redux thunk lets you return a function instead of an object. That function can contain any type of logic you want, such as an axios call.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I have definitely enjoyed learning React Hooks with the context API the most. Hooks is just such a neat way to code in React. It is straightforward and clean, and brings joy into developing. I like the context API because it is a much simpler then redux and can pretty much replace it when partnered with hooks.
