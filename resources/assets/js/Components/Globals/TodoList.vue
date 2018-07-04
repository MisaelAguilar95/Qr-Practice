<template>
	<div>
		<h1 v-if="showTitle">{{ title }}</h1>
	    <h2 v-for="task in todo">{{ task }}</h2>
	    <input type="text" v-model="task">
	    <button @click="addTodo">add todo</button>
    </div>
</template>

<script>
export default {

	props: ['title'],

  /**
   * The main instance reactive
   * properties of the component.
   * ------------------------------
   * @member {Object}}
   */
  data: function () {
	return {
		showTitle: true,
		task: 'say Hello to jorge',
		todo: ['work', 'studie Math']
		//  client: {},
		//  user: {},
			// status: 200,
		//  modal: null,
		//  toasts: []
	}
  },
  methods: {
    addTodo () {
      console.log(this)
      this.todo.push(this.task)
      this.task = ''
    }
  },
}
</script>