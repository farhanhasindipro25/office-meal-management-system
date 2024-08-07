PGDMP         7                |            office_meal_management    15.1    15.1 "    H           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            I           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            J           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            K           1262    19736    office_meal_management    DATABASE     �   CREATE DATABASE office_meal_management WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 &   DROP DATABASE office_meal_management;
                postgres    false                        3079    19740 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            L           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    19777 
   categories    TABLE     '  CREATE TABLE public.categories (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.categories;
       public         heap    postgres    false    2            �            1259    19787    items    TABLE     +  CREATE TABLE public.items (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    category_id uuid NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.items;
       public         heap    postgres    false    2            �            1259    19824    orders    TABLE     \  CREATE TABLE public.orders (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    meal_id uuid,
    date character varying(255) NOT NULL,
    month integer,
    wants_meal boolean,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    user_id uuid
);
    DROP TABLE public.orders;
       public         heap    postgres    false    2            �            1259    19751    roles    TABLE       CREATE TABLE public.roles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.roles;
       public         heap    postgres    false    2            �            1259    19808    scheduled_meals    TABLE     �   CREATE TABLE public.scheduled_meals (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    schedule_id uuid NOT NULL,
    item_id uuid NOT NULL
);
 #   DROP TABLE public.scheduled_meals;
       public         heap    postgres    false    2            �            1259    19759    users    TABLE       CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_name character varying(255) NOT NULL,
    employee_id character varying(255),
    email character varying(255) NOT NULL,
    phone character varying(20),
    gender character varying(10),
    password character varying(255) NOT NULL,
    role_id uuid NOT NULL,
    is_banned boolean DEFAULT false,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public         heap    postgres    false    2            �            1259    19800    weekly_schedules    TABLE     I  CREATE TABLE public.weekly_schedules (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    working_day integer,
    current_month integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    start_date date,
    end_date date
);
 $   DROP TABLE public.weekly_schedules;
       public         heap    postgres    false    2            A          0    19777 
   categories 
   TABLE DATA           S   COPY public.categories (id, name, description, created_at, updated_at) FROM stdin;
    public          postgres    false    217   �+       B          0    19787    items 
   TABLE DATA           N   COPY public.items (id, category_id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    218   �,       E          0    19824    orders 
   TABLE DATA           g   COPY public.orders (id, meal_id, date, month, wants_meal, created_at, updated_at, user_id) FROM stdin;
    public          postgres    false    221   �.       ?          0    19751    roles 
   TABLE DATA           A   COPY public.roles (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    215   @0       D          0    19808    scheduled_meals 
   TABLE DATA           C   COPY public.scheduled_meals (id, schedule_id, item_id) FROM stdin;
    public          postgres    false    220   �0       @          0    19759    users 
   TABLE DATA           �   COPY public.users (id, user_name, employee_id, email, phone, gender, password, role_id, is_banned, created_at, updated_at) FROM stdin;
    public          postgres    false    216   �2       C          0    19800    weekly_schedules 
   TABLE DATA           x   COPY public.weekly_schedules (id, working_day, current_month, created_at, updated_at, start_date, end_date) FROM stdin;
    public          postgres    false    219   �9       �           2606    19786    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    217            �           2606    19794    items items_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.items DROP CONSTRAINT items_pkey;
       public            postgres    false    218            �           2606    19831    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    221            �           2606    19758    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    215            �           2606    19813 $   scheduled_meals scheduled_meals_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.scheduled_meals
    ADD CONSTRAINT scheduled_meals_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.scheduled_meals DROP CONSTRAINT scheduled_meals_pkey;
       public            postgres    false    220            �           2606    19771    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            �           2606    19769    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            �           2606    19807 &   weekly_schedules weekly_schedules_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.weekly_schedules
    ADD CONSTRAINT weekly_schedules_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.weekly_schedules DROP CONSTRAINT weekly_schedules_pkey;
       public            postgres    false    219            �           2606    19795    items items_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.items
    ADD CONSTRAINT items_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);
 F   ALTER TABLE ONLY public.items DROP CONSTRAINT items_category_id_fkey;
       public          postgres    false    3234    217    218            �           2606    19832    orders orders_meal_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_meal_id_fkey FOREIGN KEY (meal_id) REFERENCES public.weekly_schedules(id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_meal_id_fkey;
       public          postgres    false    219    3238    221            �           2606    19837    orders orders_user_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    3232    221    216            �           2606    19819 ,   scheduled_meals scheduled_meals_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.scheduled_meals
    ADD CONSTRAINT scheduled_meals_item_id_fkey FOREIGN KEY (item_id) REFERENCES public.items(id);
 V   ALTER TABLE ONLY public.scheduled_meals DROP CONSTRAINT scheduled_meals_item_id_fkey;
       public          postgres    false    218    3236    220            �           2606    19814 0   scheduled_meals scheduled_meals_schedule_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.scheduled_meals
    ADD CONSTRAINT scheduled_meals_schedule_id_fkey FOREIGN KEY (schedule_id) REFERENCES public.weekly_schedules(id);
 Z   ALTER TABLE ONLY public.scheduled_meals DROP CONSTRAINT scheduled_meals_schedule_id_fkey;
       public          postgres    false    220    3238    219            �           2606    19772    users users_role_id_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_id_fkey;
       public          postgres    false    3228    216    215            A   �   x���1N�0��9����{mo	�z��fb��HP��E��Sl5�����Ȳ��rpX����-�%�L��g%�4�%K�v�,Z����t�4x4��?U�R`�����x����S(�w�n�ekܶ^�m���4M?_��;q��3�\DC,�&�S�}k�����?e=~�W�����|瀏��?��Y|      B   �  x�����1E��W�h���Ko�z�H����]'p�E�>t ��nŁt���)#.z�A�L��b�Y���V��4`�T�B�1��V����]���˱�00`��@{�=ю�"�{��Mb�B���?D�zS�B�*
�y9_�w!��l#
DL�q�R�)͡�JY�f����H�6��Cʣ �r�׏�����#	3�0���Z����P[eFI�������]����K���!AX YqN�Z^��|����i�/W�o1\tjK0z�8Z3(��<��3�d�z�� ��̚�0�ˍ�Ьf$}�y1��fC����y �Xn�'i�|9�z�>}\.��+������J}����@�&�l����������,�$gq��	z	ʭ��X>��>�A&9�=�ؼ7�H���oF���(�9��Jvz���[��@*��'5m�\rp��N$oC��Ǵ�#A��h�m��l� �>`^      E   �  x���;�TAE�׫`~r�W���`������{<3�Vk�k�9e_�k%T� :	z�üѴ�x��t�����BhJ�社�D�����l��z�<I +��r!_gQ�g�˷�V�e� ��n���.�߳�hM�Z��2�������^9��/��X�ʳ(�X�(}8T����O�}����go\��0*�YB��Y�F��ā*%1�@�YAF�Ye�>w�?�GFt��"��Ϣ4��M_k@u�y5*�EZ����t���q0q\�g�@��ч(��(����l5�K'�<U-o9�o��}���q�Fz�ބ�.�9o"��g��K��U�ίs���zZ�ry�$�Ywi��#H͏��N���O~���i��y7���}���r�n��4o��      ?   ~   x���=�0@�99pe;qbw��!A�"6$T�s�#�	X�7<�(�3A� ���*G �C�[nYo��1~;f�pb�g��f�䵇��+DN
J���ԓ�z�N�\��/���^�??��{��-,�      D   �  x����1C�]�g0`�K�x�¿��m�$�
<+e �X�n��as1�p%���K�7�2C�9�t]I�[lϕCĻ���s*��\ �S�x-�7���3���Gd{GAl[sW����˵q���co��U(y�i$�;܇�Ҹ=i8xꄭ��CE�����������5_c�+��7P�@�`)��؉\���;{���f� 2�q�Ub�g����3[�m8�N���wU���q(��v��t~퓎,�z5�]�)}ì��[�8h�t�0��7ܷ����=���0���$�x[ɽ|�%4�M���e9��6�ͱD�=3d�	��X�B���i>_2��������$�$�,���k��m�=I�*#��i�⣻/8l�Yq��z����%��u�4���pUD����ߵ4�K�k9:hH�Ž�����4      @   S  x����R"�������&�����(���1�����@���,�ݺ[�;�@������VJ���� g0���OD%"V��T��e�D�P͊�?�N/֩���"*�3.��QW�������u�?�2�7��#���"s	$r
h�g.�ԡ�Gb
� ��1�@\�<fRN��JF&VSO�O�T@��8����$]4t��|���姳F�	��+�?���XT��-
��]Q�,��+@�U@ʰbĠfۄ)�A@ZưBd��JAJd�� 4�T C� �'
i��I�rK����XƯ(����A�o�|C��t6��^sq�3�W���]<_x�τlvcr:2��em���0��v���2bL*D�q�ߏ��l��
j��s�w�"��$j������U���R�C��7:"Za*&�s�_�H�
!q�q��v�D(_>��@*"�FB�	�ҼS�����1NO�.��{�s��u�z�o�˓�zq������V��G��Eځj��?�쁍�
A1�|$T�RI��X$$$�1`�� 1\#I�G�G�u6�?�E�pw�~ϧw%+CR��E9{�y�`g�N	U���e�����>�6�gŢ#m�0�=O˥�D�j��S��f.2t����F�C:���ݶ_��8�uo�m�mO�n'�qz�F'󇯱1��+�>*%HC�x�7���A~�Nh�	q��,��G˲������n�;�N��sɲ���v����O{�=Z
_���W������?]���H%8��*���J�{I���Qʒf�T����ޚ^.���צ�͛=��Q�n�c+���O3=��4f.�np*�ճ�6���x|9��f7��w'h�i;%Q�bL�]�u��aL��R�����,	�q���ס�P���R0�l�ܸ�-�Q�}n#��3��6���e$��Q�۫�_ߛ��c?YN��t��k��"��M����fzJpz_��`�I��*����]��P+�B�=*$�&�늗kTBH�M$TJ�P��������z�׏%��wW�ɵ��œ@�^��:Ñ�&g���7Z��6ק�v��ͮ�֋�% ��RcB	��H�D�	#�u0�Ex�r�0C�T[����|��	Ɣ��0�_�����7֮α���|;�gY�Ǫ=]̞f�u��#���L�ş6�2U�"V�H*��J��&�[N0�Ȑ0���*���l��B�����}�ux�
��JF�m3�4�7Ӵ:��l}���-�wSv��j��}]3���]O���t�5}	,�C�:*y*��si�C-��ҹ���{����-����e�~�[HM�{}��F�������ݴ���^���?���sJ�'ۦ�o/��Xܯ��
8.E$cF�GJ2T����|���	���1f� ,j��ܥ��al|M����Y����"���h��j�B�����]�юt�o�/���r���_���DC�a�
B^��dv1��S$+A*�~GOx�O,��� �sa��P���ʇ�]�1_g���E?7���7��s��{3�M&���WiR;������z��~�mNհڪe���k%�h�y;L'0��$�A,�&)E�1�BaR"��L���V�� m8'6t�'�S��lq��,��f_x�p�^�H!ʵ��b$c,J1B2T{������u3i棭_6�u�[���,��׻h�e��q��T[[q���ۧŦs9���&+U!��Z�X8��&cI ��O$BW�G�`��{ w0|iFrl�?��+�{�~�g�˾��-9�}���پ����m¦r0�aƿ�݈�J�u�;�������p���Ŀ�JťR����      C   �   x����mD1Dc�*� Oq��
6���KX90�9�1<�4VC��i
H�])��Z4�HDJ-^I *Q}�?U��+�e�_��J��ar(�������hNt��nB���g6G��=��w�й}����$�In�fAwLNf�Т7!�����5@L2�6O���(�oȏ��W��~\��t�m�     