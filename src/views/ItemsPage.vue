<template>
    <div><h2>Items</h2>
    <p>This will be where the list of items will be!</p>
    <div>
      <b-button v-b-modal.modal-1>Add Item</b-button>

      <b-modal id="modal-1" title="Add Item" ok-only ok-variant="secondary" ok-title="Cancel">
        <b-form @submit.prevent="addItem" class="needs-validation">
          <b-form-group
          id="item-name"
          label="Item Name"
          label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            class="form-control"
            required
            placeholder="Enter item name"></b-form-input>
          </b-form-group>
          <b-form-group
          id="item-description"
          label="Item Description"
          label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.description"
            type="text"
            class="form-control"
            required
            placeholder="Enter item description"></b-form-input>
          </b-form-group>
          <b-form-group
          id="item-price"
          label="Item Price"
          label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.price"
            :state="validation"
            class="form-control"
            type="text"
            required
            placeholder="Enter item price. Must be a number"></b-form-input>
            <b-form-invalid-feedback :state="validation">
            Please enter a numerical item price.
            </b-form-invalid-feedback>
          </b-form-group>
          <b-modal id="error" title="Error">
            <p class="my-4">Please input a numerical price.</p>
          </b-modal>
          <b-form-group
          id="area-code"
          label="Area Code"
          label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.area_code"
            :state="validationAreacode"
            type="text"
            class="form-control"
            required
            placeholder="Enter your area code"></b-form-input>
            <b-form-invalid-feedback :state="validationAreacode">
            Please enter a numerical item price.
            </b-form-invalid-feedback>
          </b-form-group>
          <b-modal id="error-areacode" title="Error">
            <p class="my-4">Please input a numerical area code.</p>
          </b-modal>
          <b-form-group
          id="seller"
          label="Seller"
          label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="form.seller"
            type="email"
            class="form-control"
            required
            placeholder="Enter seller's email"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-modal>
    </div>
    <div>
    <b-table striped hover 
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      :items="tableData"
      @row-selected="onRowSelected"
      responsive="sm">
    </b-table>
    </div>

    <p>
      Selected Rows:<br>
      {{ selected }}
    </p>

    </div>
    
</template>

<script>

export default {
  name: 'itemslist',
  data() {
        return {
          tableData: [{
            item_name: 'Lamp',
            item_description: 'Slightly dusty desk lamp',
            date_added: '10-18-2019',
            price: '$10',
            area_code: '55555',
            seller: 'Bob'
          }],
          addItemMenuVisible: false,
          formerror: false,
          form: {
            name: '',
            description: '',
            price: '',
            area_code: '',
            seller: ''
          },
          date: '0',
          itemdate: '',
          selected: [],
          selectMode: 'single'
        }
  },
  computed: {
    validation() {
      if(this.form.price === '' || isNaN(this.form.price)) {
        return false;
      }
      else {
        return true;
      }
    },
    validationAreacode() {
      if(this.form.area_code === '' || isNaN(this.form.area_code)) {
        return false;
      }
      else {
        return true;
      }
    }
  },
  methods: {
    buy() {
      console.log("hi");
    },
    onRowSelected(items) {
        this.selected = items
    },
    addItem() {
      if(this.form.price === '' || isNaN(this.form.price)) {
        this.$bvModal.show("error");
      }
      else if(this.form.area_code === '' || isNaN(this.form.area_code)) {
        this.$bvModal.show("error-areacode");
      }
      else {
        console.log("Added item");
        const item = {
          name: this.form.name, 
          description: this.form.description, 
          price: this.form.price, 
          seller: this.form.seller,
          area_code: this.form.area_code
        }
        this.addItemMenuVisible = false;
        this.$bvModal.hide('modal-1');
      //store dispatch or something
      }
    },
    
  }
};
</script>