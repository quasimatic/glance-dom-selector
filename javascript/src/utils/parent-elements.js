export default function (elements, containerElements, includeSelf = true) {
    let containerLookup = new Set(containerElements);
    return elements.reduce((result, element) => {
        let parent = includeSelf ? element : element.parentNode;
        let parents = [];
        while (parent !== null && parent.outerHTML !== null) {
            parents.push(parent);
            if(containerLookup.has(parent)) break;

            parent = parent.parentNode;
        }

        result.push(parents);
        return result;
    }, []);
};