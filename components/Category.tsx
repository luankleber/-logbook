export default function Category({ setSelectedTag, tag, selectedTag }) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag(null);
    }
    return setSelectedTag(tag);
  };

  // Define a cor do ring com base na categoria
  const getRingColor = (category) => {
    switch (category) {
      case 'React':
        return 'ring-yellow-400 ransition ease-in-out delay-150 hover:bg-yellow-400 duration-300';
      case 'API':
        return 'ring-purple-400 transition ease-in-out delay-150 hover:bg-purple-400 duration-300';
      case 'Opensource':
        return 'ring-green-400 transition ease-in-out delay-150 hover:bg-green-400 duration-300';
      // Adicione outros casos conforme necessário
      default:
        return 'ring-light-blue transition ease-in-out delay-150 hover:bg-light-blue duration-300';
    }
  };

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && 'ring-2 ring-gray-400 text-white'
      } inline-flex items-center px-3 py-1.5 uppercase bg-transparent rounded cursor-pointer ring-2 ${getRingColor(tag)}`}
    >
      <span className="text-xs text-white font-bold uppercase">{tag || 'All'}</span>
    </div>
  );
}
