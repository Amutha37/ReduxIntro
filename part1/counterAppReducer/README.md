<h3 align="center"> $\textcolor{orange}{REDUX\ }$
</h3>

## $\color{olive}{useReduce}\ and\ {useContext}$

### State management

<p>
This part of counter app uses `useReducer` and `useContext` for passing state components and defining the counter context in a separate file.
</p>

<details>
<summary>

## $\color{olive}{Dependencies}$

  </summary>

```
  "npx create-react-app counterapp"
```

and

```
"npm install redux"
```

</details>

<details>
<summary>

## $\color{olive}{useReducer}$

 </summary>

- Implement the counter state management using a Redux-like state management mechanism provided by React's built-in `useReducer` hook.

\*\* This part is a continue initial introduction of `useReducer` form `part6d` after `Exercise6.20`.

</details>

<details>
<summary>

## $\color{olive}{useContext}$

 </summary>

- The hook useReducer provides a mechanism to create a state for an application. The parameter for creating a state is the reducer function that handles state changes, and the initial value of the state:

- const [counter, counterDispatch] = useReducer(counterReducer, 0)
  The reducer function that handles state changes is similar to Redux's reducers, i.e. the function gets as parameters the current state and the action that changes the state. The function returns the new state updated based on the type and possible contents of the action:

- Context defining the value and functionality of the counter is available to all components of the application.

- React query message hooks `https://tanstack.com/query/latest/docs/react/guides/mutations?from=reactQueryV3&original=https%3A%2F%2Ftanstack.com%2Fquery%2Fv3%2Fdocs%2Fguides%2Fmutations`

</details>
