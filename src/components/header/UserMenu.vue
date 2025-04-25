<template>
  <ul class="ods-actions-menu__ul ods-actions-menu--user__ul">
    <li class="user-ul__user-name__title">
      <ods-icon name="user" size="18"></ods-icon>
      Username:
    </li>
    <li class="user-ul__user-name--list">john_doe</li>
    <li class="user-ul__user-profiles__title">
      <ods-icon name="user-role" size="18"></ods-icon>
      Profiles:
    </li>
    <li class="user-ul__user--profiles-list">
      <ul>
        <li class="user-ul__user-profile">Admin</li>
        <li class="user-ul__user-profile">Editor</li>
      </ul>
    </li>
    <li class="user-ul__user-name__title">
      <ods-icon name="vote" size="18"></ods-icon>
      Email:
    </li>
    <li class="user-ul__user-name--list">john.doe@example.com</li>
    <li class="ods-actions-menu__separator"></li>
    <li>
      Language
      <lang-selector cssClass="user-ul__languages" :mobile="false"></lang-selector>
    </li>
    <li class="ods-actions-menu__separator"></li>
    <li class="user-ul__user-name">
      <a onclick="alert('Open preferences dialog')">
        <ods-icon name="setting"></ods-icon>
        Preferences
      </a>
    </li>
    <!--
  <li class="ods-actions-menu__separator"></li>
  <router-link tag="li" to="/dashboard">
    <a>
      <ods-icon name="book"></ods-icon>
      Help
    </a>
  </router-link>
  -->
    <li class="ods-actions-menu__separator"></li>
    <li class="user-ul__user-name">
      <a onclick="alert('Logout triggered')">
        <ods-icon name="logout"></ods-icon>
        Log Out
      </a>
    </li>
  </ul>

  <ods-dialog title="User Preferences" :visible.sync="false" width="30%" :append-to-body="true">
    <ods-form>
      <ods-form-item label="Country">
        <ods-select placeholder="Select country">
          <ods-option label="Spain" value="spain"></ods-option>
          <ods-option label="France" value="france"></ods-option>
          <ods-option label="Germany" value="germany"></ods-option>
        </ods-select>
      </ods-form-item>
      <ods-form-item label="Language">
        <ods-select placeholder="Select language">
          <ods-option label="English" value="en"></ods-option>
          <ods-option label="Español" value="es"></ods-option>
        </ods-select>
      </ods-form-item>
    </ods-form>
    <span slot="footer" class="dialog-footer">
      <ods-button type="text">Cancel</ods-button>
      <ods-button>Apply</ods-button>
    </span>
  </ods-dialog>
</template>
