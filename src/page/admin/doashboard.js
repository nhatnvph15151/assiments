import headerAdmin from "../../components/headerAdmin";
const doashboard = {
  render() {
    return /*html */`
        ${headerAdmin.render()}
        <div class="min-h-full">
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <a href="/admin/add"><h1 class="text-xl border bg-cyan-500 text-white rounded-md px-4 py-1 hover:bg-cyan-600">Add New</h1></a>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>
        `;
  },
};
export default doashboard;