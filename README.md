# Tempo Frontend challenge

# Solution Improvement

### Describe what you have improved in the solution

SearchFilter is a component with an input type text, and its label. The component receives three properties, labelText, searchTerm, and updateSearchTerm. The first one is the label text, it's optional, and the default value is “Filter by name:”. The second one is the current input value. And the third one is the function to update the input value. The input value is updated on change, which means that if the user types something on it, the value will be updated.

This component is used in Teams and TeamOverview pages. When the user types something in the input, the list is automatically filtered by the typed term.

## To Run the project you must run:

```
npm install
```

## after the installation finished, you can run:

```
npm start
```

#### The project will open in your browser with the following url http://localhost:3000;

## To run the tests yo must run

```
npm run test
```
