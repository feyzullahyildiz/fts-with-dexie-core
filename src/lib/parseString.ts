export const parseString = (str: string, delimiter = '-') => {
  return str.split(delimiter);
};
// export const parseString = (str: string, options: Options = {}) => {
//   const delimiter = getDefaultValue(options.whiteSpaceDelimiter, '-');

//   const outputArray = [];
//   const segments = str.split(delimiter);
//   const numSegments = segments.length;

//   const addedSubstrings = new Set(); // to keep track of added substrings

//   for (let i = 0; i < numSegments; i++) {
//     let segment = segments[i];
//     const segmentLength = segment.length;

//     if (segmentLength === 0) continue;  // Skip empty string

//     for (let j = 0; j <= segmentLength; j++) {
//       const substring = segment.slice(0, j);
//       if (substring.length > 0 && !(substring.endsWith(delimiter) && j === segmentLength)) {
//         if (!addedSubstrings.has(substring)) {
//           outputArray.push(substring);
//           addedSubstrings.add(substring);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < numSegments; i++) {
//     for (let j = i + 1; j < numSegments; j++) {
//       let combinedSegment = segments.slice(i, j + 1).join(delimiter);

//       if (combinedSegment.length > 0 && !combinedSegment.endsWith(delimiter)) {
//         if (!addedSubstrings.has(combinedSegment)) {
//           outputArray.push(combinedSegment);
//           addedSubstrings.add(combinedSegment);
//         }
//       }

//       const combinedSegmentLength = combinedSegment.length;

//       for (let k = 0; k < combinedSegmentLength; k++) {
//         const substring = combinedSegment.slice(0, combinedSegmentLength - k);
//         if (substring.length > 0 && !substring.endsWith(delimiter)) {
//           if (!addedSubstrings.has(substring)) {
//             outputArray.push(substring);
//             addedSubstrings.add(substring);
//           }
//         }
//       }
//     }
//   }

//   return outputArray;
// };



