export function Buscador ({ buscar, handleSearch }) {
  return (
    <div>
      <input
        type='seacrh'
        name='search'
        placeholder='buscar'
        value={buscar}
        onChange={handleSearch}
      />
    </div>
  )
}
