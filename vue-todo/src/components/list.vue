<templates>
<section>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(item, index) in list"
            :key="index"
          >
            <input
              class="item"
              type="text"
              readonly
              :value="item"
              ref="item"
              @dblclick="modifyItem(index)"
              @keyup.enter="modifyItem(index)"
            />
            <div class>
              <button
                class="btn btn-link dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                더보기
                <span class="caret"></span>
              </button>
              <div class="dropdown-menu">
                <button class="dropdown-item" ref="modifyBtn" @click="modifyItem(index)">수정</button>
                <button class="dropdown-item" @click="removeItem(index)">삭제</button>
              </div>
            </div>
          </li>
        </ul>
      </section>
</templates>

<script>
export default {};
</script>

<style scoped>
</style>