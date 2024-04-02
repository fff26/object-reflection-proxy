export function orderByProps(obj, order) {
    const orderedProps = [];
    const restProps = [];
  
    // Сначала добавляем свойства в порядке из массива order
    for (const prop of order) {
      if (prop in obj) {
        orderedProps.push({ key: prop, value: obj[prop] });
      }
    }
  
    // Добавляем оставшиеся свойства в алфавитном порядке
    for (const prop in obj) {
      if (!order.includes(prop)) {
        restProps.push({ key: prop, value: obj[prop] });
      }
    }
  
    // Сортируем оставшиеся свойства по ключу
    restProps.sort((a, b) => (a.key > b.key ? 1 : -1));
  
    // Объединяем отсортированные свойства
    return [...orderedProps, ...restProps];
  }
  
  export function extractSpecials({ special }) {
    return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    }));
  }