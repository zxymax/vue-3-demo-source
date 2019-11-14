import {
  ref,
  reactive,
  toRefs,
} from '@vue/composition-api';

export default function () {
  const title = ref('Use Vue3');
  const msg = ref(`优化版的-${title.value}`);
  const val = ref('');
  const breweies = reactive({
    lists: [],
  });
  const submitted = async () => {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries?by_name=${val.value}`,
    );
    const json = await response.json();
    breweies.lists = json;
  };
  return {
    msg,
    val,
    ...toRefs(breweies),
    submitted,
  };
}
