import React, { useState } from 'react';

function ArrayMethods() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [output, setOutput] = useState('');

  const handlePush = () => {
    const newNumbers = [...numbers];
    newNumbers.push(6);
    setNumbers(newNumbers);
    setOutput('push: Added 6');
    console.log(newNumbers);
  };

  const handlePop = () => {
    const newNumbers = [...numbers];
    const removed = newNumbers.pop();
    setNumbers(newNumbers);
    setOutput(`pop: Removed ${removed}`);
    console.log(newNumbers);
  };

  const handleUnshift = () => {
    const newNumbers = [...numbers];
    newNumbers.unshift(0);
    setNumbers(newNumbers);
    setOutput('unshift: Added 0 to beginning');
    console.log(newNumbers);
  };

  const handleShift = () => {
    const newNumbers = [...numbers];
    const removed = newNumbers.shift();
    setNumbers(newNumbers);
    setOutput(`shift: Removed ${removed} from beginning`);
    console.log(newNumbers);
  };

  const handleMap = () => {
    const mapped = numbers.map(n => n * 2);
    setOutput(`map: [${mapped}]`);
    console.log(mapped);
  };

  const handleFilter = () => {
    const filtered = numbers.filter(n => n % 2 === 0);
    //it will give array into string format
    setOutput(`filtered: [${filtered}]`);
    console.log(filtered);
  };

  const handleForEach = () => {
    let result = '';
    numbers.forEach(n => {
      result += `Number: ${n} | `;
    });
    setOutput(`forEach: ${result}`);
    console.log('forEach:', numbers);
  };

  const handleIncludes = () => {
    const includes = numbers.includes(3);
    setOutput(`includes(3): ${includes}`);
    console.log(`includes 3?`, includes);
  };

  const handleReduce = () => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    setOutput(`reduce: ${sum}`);
    console.log(`Sum is '${sum}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Array Methods Demo</h2>
      <p><strong>Current Array:</strong> [{numbers.join(', ')}]</p>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={handlePush}>Push</button>{' '}
        <button onClick={handlePop}>Pop</button>{' '}
        <button onClick={handleUnshift}>Unshift</button>{' '}
        <button onClick={handleShift}>Shift</button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleMap}>Map</button>{' '}
        <button onClick={handleFilter}>Filter</button>{' '}
        <button onClick={handleForEach}>ForEach</button>{' '}
        <button onClick={handleIncludes}>Includes (3)</button>{' '}
        <button onClick={handleReduce}>Reduce (Sum)</button>
      </div>

      <div style={{ marginTop: '20px', color: 'blue' }}>
        <strong>Output:</strong> {output}
      </div>
    </div>
  );
}

export default ArrayMethods;