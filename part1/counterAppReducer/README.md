<h3 align="center"> $\textcolor{orange}{REDUX\ }$
</h3>

## $\color{olive}{Part6}$

### Getting Started with Redux

<p>
Get to know Redux by implementing a counter application.
</p>

<details>
<summary>
Step 1
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
## $\color{olive}{useReducer- Note}$
 </summary>

- The hook useReducer provides a mechanism to create a state for an application. The parameter for creating a state is the reducer function that handles state changes, and the initial value of the state:

- const [counter, counterDispatch] = useReducer(counterReducer, 0)
  The reducer function that handles state changes is similar to Redux's reducers, i.e. the function gets as parameters the current state and the action that changes the state. The function returns the new state updated based on the type and possible contents of the action:

</details>
