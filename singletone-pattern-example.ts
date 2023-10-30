///////////////////////// NATIVE JAVASCRIPT EXAMPLE /////////////////////////
const Singleton = (function () {
  let instance;

  function createInstance() {
    // Your singleton instance creation logic goes here
    return {
      someProperty: "value",
      someMethod: function () {
        console.log("Some method of the singleton");
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage:
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

console.log(singletonA === singletonB); // true

///////////////////////// TYPESCRIPT EXAMPLE /////////////////////////
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Private constructor to prevent external instantiation
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod() {
    console.log("Some method of the singleton");
  }
}

// Usage:
const singletonA = Singleton.getInstance();
const singletonB = Singleton.getInstance();

console.log(singletonA === singletonB); // true


///////////////////////// Singleton Hook in React /////////////////////////

// ⭕ New file for custom hook, let's call it useCounter.js:

import React, { createContext, useContext, useState } from 'react';

// Create a context to hold the counter state
const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}

// ⭕ In main App.js wrap your entire app with the CounterProvider:

import React from 'react';
import { CounterProvider } from './useCounter';

function App() {
  return (
    <CounterProvider>
      {/* Your app content here */}
    </CounterProvider>
  );
}

export default App;

// ⭕ Now in any component where you want to access the counter, use the useCounter hook

import React from 'react';
import { useCounter } from './useCounter';

function DisplayCounter() {
  const { counter } = useCounter();

  return <div>{counter}</div>;
}

function UpdateCounter() {
  const { counter, setCounter } = useCounter();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}




